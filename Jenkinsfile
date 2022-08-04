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
                bat 'node_modules/.bin/cypress run'
            }
        }
        
        stage('Finish') {
            steps {
                echo 'Finish'
            }
        }
    }
    
    post {
    always {
      junit(testResults: 'cypress/results/results.xml', allowEmptyResults : true)
      archiveArtifacts(artifacts: 'cypress/videos/sample_spec.js.mp4', fingerprint: true)
    }
  }
}
