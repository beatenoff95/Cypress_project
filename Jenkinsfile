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
       
        stage('Env Variables') {
            steps {
                echo 'current build number: ${currentBuild.number}'
            echo 'previous build number: ${currentBuild.previousBuild.getNumber()}'             
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
      junit(testResults: 'builds/15/junitResult.xml', allowEmptyResults : true)
      archiveArtifacts(artifacts: 'cypress/videos/sample_spec.js.mp4', fingerprint: true)
    }
  }
}
