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
                def script = load 'script.groovy'
                script.devBuild()
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
        post {
        success {
            discordSend description: 'Build succeeded', webhookURL: 'https://discord.com/api/webhooks/1221413538577514516/mEI4OXE0EjpcXasZnqRm406wBMF9slkw_LBVtCqU6tyQIw7amwdtthQ2ch3gRdCeyxVD'
        }
        failure {
            discordSend description: 'Build failed', webhookURL: 'https://discord.com/api/webhooks/1221413538577514516/mEI4OXE0EjpcXasZnqRm406wBMF9slkw_LBVtCqU6tyQIw7amwdtthQ2ch3gRdCeyxVD'
        }
    }
}