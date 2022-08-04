pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                bat 'npm i'
            }
        }
       
        stage('Unit Tests') {
            steps {
                bat 'npx cypress open'
            }
        }
        
        stage('Finish') {
            steps {
                echo 'Finish'
            }
        }
    }
}