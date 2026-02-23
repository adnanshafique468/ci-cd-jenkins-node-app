pipeline {
    agent any

    environment {
        APP_NAME = "node-app"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Stop Old App') {
            steps {
                sh '''
                pm2 stop $APP_NAME || true
                pm2 delete $APP_NAME || true
                '''
            }
        }

        stage('Start App') {
            steps {
                sh 'pm2 start server.js --name $APP_NAME'
            }
        }

        stage('Save PM2') {
            steps {
                sh 'pm2 save'
            }
        }
    }

    post {
        success {
            echo '🚀 Deployment Successful!'
        }
        failure {
            echo '❌ Deployment Failed!'
        }
    }
}