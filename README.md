 DevOps Task Manager Application

A containerized task management application deployed on AWS EC2 using Docker and Docker Compose.

Technologies Used
- AWS EC2 and EBS
- Docker and Docker Compose
- Node.js
- MongoDB
- HTML, CSS, JavaScript
- Linux
- Git and GitHub

Key Features
- Containerized frontend, backend, and database.
- Multi-container deployment using Docker Compose.
- Application hosting on AWS EC2.
- Persistent MongoDB storage using EBS.
- EBS snapshot-based backup and volume recovery.
- AMI-based EC2 instance recovery practice.

Architecture


Users
  |
AWS EC2
  |
Docker Compose
  |
  |-- Frontend (Nginx)
  |-- Backend (Node.js)
  |-- MongoDB
         |
     EBS Storage

Backup and Recovery
- Created EBS snapshots for database storage.
- Restored data using a new EBS volume.
- Practiced EC2 recovery using an AMI.

Future Enhancements
- Automated database backups.
- Disaster recovery automation.
- CloudWatch monitoring and alerts.
- CI/CD pipeline.
- Container health monitoring.

Learning Outcomes
Hands-on experience with Docker, AWS EC2, EBS, MongoDB, Linux administration, persistent storage, and disaster recovery.

Author
Sindu H M

GitHub: https://github.com/sinduhm/devops-task-manager
