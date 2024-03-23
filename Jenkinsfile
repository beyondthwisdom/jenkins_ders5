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
                echo 'Dev Building...'
                withCredentials([usernamePassword(credentialsId: 'docker-credential', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh "echo Derleme ve image build ve push işlemi başlatılıyor"
                    sh "./mvnw package -Pprod -DskipTests jib:build -Djib.to.image=btwdevops/jenkinsders5-dev:pipeline-${params.VERSION}"
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
                echo 'Test Building...'
                withCredentials([usernamePassword(credentialsId: 'docker-credential', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh "echo Derleme ve image build ve push işlemi başlatılıyor"
                    sh "./mvnw package -Pprod -DskipTests jib:build -Djib.to.image=btwdevops/jenkinsders5-test:pipeline-${params.VERSION}"
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
                echo 'Prod Building...'
                withCredentials([usernamePassword(credentialsId: 'docker-credential', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh "echo Derleme ve image build ve push işlemi başlatılıyor"
                    sh "./mvnw package -Pprod -DskipTests jib:build -Djib.to.image=btwdevops/jenkinsders5-prod:pipeline-${params.VERSION}"
                }
            }
        }
    }
}