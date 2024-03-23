pipeline {
    agent any

    parameters {
        choice(name: 'DEPLOY', choices: ['dev', 'test', 'prod'], description: 'Deployment environment')
        string(name: 'VERSION', defaultValue: '1.0.0', description: 'Versionu seçiniz')
    }

    stages {
        stage('Dev') {
            when {
                expression {
                    params.DEPLOY == 'dev'
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
                    params.DEPLOY == 'test'
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
                    params.DEPLOY == 'prod'
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