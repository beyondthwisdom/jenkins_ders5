@Library('jenkins-shared-library')_

pipeline {
    agent any


    parameters {
        string(name: 'VERSION', defaultValue: '1.0.0', description: 'Versionu seçiniz')
        booleanParam(name: 'DEV', defaultValue: true, description: 'Deploy to development?')
        booleanParam(name: 'TEST', defaultValue: true, description: 'Deploy to test?')
        booleanParam(name: 'PROD', defaultValue: true, description: 'Deploy to prod?')
    }

    stages {
        

        stage('Dev') {
            when {
                expression {
                    params.DEV  
                }
            }


            steps {
              script {   
                 buildAndPublish()

              }  
            }
        }
        stage('Test') {
            when {
                expression {
                    params.TEST
                }
            }
            steps {
              script {   
                def script = load 'script.groovy'
                script.testBuild()

              }   
 
            }
        }
        stage('Prod') {
            when {
                expression {
                    params.PROD
                }
            }
            steps {
              script {   
               def script = load 'script.groovy'                
               script.prodBuild()
              } 
            }
        }
    }
}