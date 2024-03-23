pipeline {
    agent any

    stages {
        stage('Dev') {
            steps {
                echo 'Dev Building...'
                // Buraya build komutlarınızı ekleyin
            }
        }
        stage('Test') {
            steps {
                echo 'Test Building...'
                // Buraya test komutlarınızı ekleyin
            }
        }
        stage('Prod') {
            steps {
                echo 'Prod Building...'
                withCredentials([usernamePassword(credentialsId: 'docker-credential', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh "echo Derleme ve image build ve push işlemi başlatılıyor"
                    sh "./mvnw package -Pprod -DskipTests jib:build -Djib.to.image=btwdevops/jenkinsders5:1.0.0"
                }
            }
        }
    }
}