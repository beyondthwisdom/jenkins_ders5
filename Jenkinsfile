pipeline {
    agent any

    stages {
        stage('Dev') {
            steps {
                echo 'Dev Building...'
                withCredentials([usernamePassword(credentialsId: 'docker-credential', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh "echo Derleme ve image build ve push işlemi başlatılıyor"
                    sh "./mvnw package -Pprod -DskipTests jib:build -Djib.to.image=btwdevops/jenkinsders5-dev:pipeline1.0.0"
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Test Building...'
                withCredentials([usernamePassword(credentialsId: 'docker-credential', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh "echo Derleme ve image build ve push işlemi başlatılıyor"
                    sh "./mvnw package -Pprod -DskipTests jib:build -Djib.to.image=btwdevops/jenkinsders5-test:pipeline1.0.0"
                }
            }
        }
        stage('Prod') {
            steps {
                echo 'Prod Building...'
                withCredentials([usernamePassword(credentialsId: 'docker-credential', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh "echo Derleme ve image build ve push işlemi başlatılıyor"
                    sh "./mvnw package -Pprod -DskipTests jib:build -Djib.to.image=btwdevops/jenkinsders5-prod:pipeline1.0.0"
                }
            }
        }
    }
}