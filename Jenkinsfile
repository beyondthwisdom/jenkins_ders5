pipeline {
    agent any
    
    def script

    parameters {
        string(name: 'VERSION', defaultValue: '1.0.0', description: 'Versionu seçiniz')
        booleanParam(name: 'DEV', defaultValue: true, description: 'Deploy to development?')
        booleanParam(name: 'TEST', defaultValue: true, description: 'Deploy to test?')
        booleanParam(name: 'PROD', defaultValue: true, description: 'Deploy to prod?')
    }

    stages {
        

        stage('Init') {
            steps {
              script = load 'script.groovy'
            }
        }

        stage('Dev') {
            when {
                expression {
                    params.DEV 
                }
            }


            steps {
              script.devBuild()
            }
        }
        stage('Test') {
            when {
                expression {
                    params.TEST
                }
            }
            steps {

                script.testBuild()
 
            }
        }
        stage('Prod') {
            when {
                expression {
                    params.PROD
                }
            }
            steps {
               script.prodBuild()
            }
        }
    }
}