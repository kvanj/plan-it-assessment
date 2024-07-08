# plan-it-assessment
Planit Technical Assessment – Automation

# How to Run?
In terminal, run - `npm install` first
Next, execute `npm run cypress:run:all`

====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  test_case_1.cy.js                        00:04        5        5        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  test_case_2.cy.js                        00:05        4        4        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  test_case_3.cy.js                        00:03        5        5        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:13       14       14        -        -        -

====================================================================================================

# CI/CD Implementation Sample - Jenkins Pipeline Stage
stage ("Cypress Automation Tests") {
    agent {
        label "cypress-agent"
    }
    when {
        anyOf {
            branch 'test'
        }
        beforeAgent true
    }
    steps {
        sh """
            npm version
            npm ci
            
            echo \$PATH
            export PATH=\$PATH:\$(pwd)
            echo \$PATH
            
            npm run cypress:run:all -c video=${params.CYPRESS_RECORD_VIDEO}
        """
    }
    post {
        always {
            echo "REPORTING"
                sh """
                    rm -f cypress.env.json
                    mkdir -p cypress/reports/mochareports
                    npm run combine-reports
                    npm run generate-report
                """
            archiveArtifacts artifacts: 'cypress/**,*.json', fingerprint: true
            publishHTML (target : [allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/reports/mochareports/',
                reportFiles: 'report.html',
                reportName: ' Sample Report Name',
                reportTitles: 'Sample Report Title'])
        }
        failure {
            jiraSendDeploymentInfo environmentId: 'TEST', environmentName: <-->, environmentType: 'test', site: <-->, state: 'failed'
        }
        success {
            jiraSendDeploymentInfo environmentId: 'TEST', environmentName: <-->, environmentType: 'test', site: <-->, state: 'successful'
        }
    }
}
