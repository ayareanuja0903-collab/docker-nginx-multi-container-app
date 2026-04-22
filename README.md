<h3>🚀 Docker Nginx Multi-Container Application</h3>

A production-style multi-container DevOps project demonstrating Docker networking and Nginx reverse proxy routing.

🌟 Project Highlights<br/>
🐳 Built a multi-container application using Docker<br/>
🔀 Implemented Nginx Reverse Proxy for routing traffic<br/>
🌐 Enabled communication using Docker custom network<br/>
⚙️ Managed services using Docker Compose<br/>
🚀 Deployed and accessed via browser<br/>

🛠️ Tech Stack

```bash
| Category         | Technology     |
| ---------------- | -------------- |
| Backend          | Node.js        |
| Web Server       | Nginx          |
| Containerization | Docker         |
| Orchestration    | Docker Compose |

```

🏗️ Architecture Overview
<p>
  <img width="1536" height="1024" src="https://github.com/user-attachments/assets/2eed4c4b-e8fb-4aa0-8a26-d4f3a071b4d3" />
</p>

🔄 How It Works
Nginx acts as a reverse proxy
Routes incoming traffic:
```bash
| URL      | Service        |
| -------- | -------------- |
| `/app1/` | Node.js App    |
| `/app2/` | Static Web App |

```

📁 Project Structure

```bash
docker-nginx-multi-container-app/
│
├── app1/                # Node.js Application
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
│
├── app2/                # Static Web App
│   ├── Dockerfile
│   └── index.html
│
├── nginx/               # Nginx Configuration
│   └── default.conf
│
└── docker-compose.yml   # Multi-container setup

```

⚙️ Setup & Run
1️⃣ Clone Repository

```bash
git clone https://github.com/ayareanuja0903-collab/docker-nginx-multi-container-app.git
cd docker-nginx-multi-container-app
```

2️⃣ Build & Run Containers
```bash
docker-compose up --build
```

3️⃣ Access Application
👉 Node.js App:
```bash
http://localhost:8080/app1/

```

👉 Static App:
```bash
http://localhost:8080/app2/

```
---

## 📸 Output<br/>

/app1/ → Node.js response<br/>
<img width="800" height="400" src="https://github.com/user-attachments/assets/8616111d-9ff5-48fe-8e9b-6deca8c57c04" />
---

/app2/ → Static HTML page<br/>

<img width="800" height="400" src="https://github.com/user-attachments/assets/f86c2254-edc5-4935-8f84-77351c03002e" />
---

🚧 Challenges & Solutions
```bash
| Challenge                     | Solution                                  |
| ----------------------------- | ----------------------------------------- |
| Routing not working           | Updated Nginx reverse proxy configuration |
| Config not loading            | Fixed Docker volume mount issue           |
| Container communication issue | Used custom Docker network                |

```

💡 Key Learnings<br/>

* Docker multi-container architecture<br/>
* Nginx reverse proxy routing<br/>
* Docker networking & service communication<br/>
* Debugging real-world DevOps issues<br/>


















