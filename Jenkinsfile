// Jenkinsfile (Sintaxe Declarativa)

pipeline {
    agent any // Roda em qualquer agente disponível

    stages {
        stage('Checkout Code') {
            steps {
                // 1. Clona o código do repositório
                checkout scm 
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Instalando dependências do Node.js...'
                // 2. Instala os módulos Node (dev e prod)
                sh 'npm install'
            }
        }
        stage('Run Unit Tests') {
            steps {
                echo 'Rodando testes de CI (jest)...'
                // 3. Executa o script de teste definido no package.json
                sh 'npm test'
            }
        }
        stage('Archive Artifacts') {
            steps {
                echo 'Arquivando código-fonte (para deploy futuro)'
                // 4. Arquiva o código-fonte (opcional, mas bom para CI/CD)
                archiveArtifacts artifacts: 'src/**'
            }
        }
    }
    // Opcional: Notificação de falha
    post {
        failure {
            echo "Pipeline FALHOU! Revise os logs e os testes."
            // Aqui você pode adicionar um slackSend ou email
        }
    }
}