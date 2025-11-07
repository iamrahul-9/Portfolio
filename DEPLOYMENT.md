# Docker Deployment & CI/CD Guide

This guide covers deploying your portfolio using Docker with automated CI/CD pipelines.

## 🐳 Docker Deployment

### Local Development with Docker

1. **Build the Docker image:**
```bash
docker build -t portfolio:latest .
```

2. **Run the container:**
```bash
docker run -p 3000:3000 portfolio:latest
```

3. **Using Docker Compose:**
```bash
docker-compose up -d
```

### Production Deployment

#### Option 1: Docker Hub
```bash
# Login to Docker Hub
docker login

# Tag your image
docker tag portfolio:latest yourusername/portfolio:latest

# Push to Docker Hub
docker push yourusername/portfolio:latest

# On your server
docker pull yourusername/portfolio:latest
docker run -d -p 3000:3000 --name portfolio yourusername/portfolio:latest
```

#### Option 2: GitHub Container Registry (GHCR)
```bash
# Login to GHCR
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin

# Tag and push
docker tag portfolio:latest ghcr.io/yourusername/portfolio:latest
docker push ghcr.io/yourusername/portfolio:latest
```

## 🚀 CI/CD Setup

### GitHub Actions (Recommended)

The repository includes two workflows:

#### 1. **CI Workflow** (`.github/workflows/ci.yml`)
- Runs on every push and pull request
- Lints code
- Checks TypeScript types
- Builds the project
- Tests Docker image build

#### 2. **Deploy Workflow** (`.github/workflows/deploy.yml`)
- Runs on push to `main` branch
- Builds and pushes Docker image to GHCR
- Deploys to production server

### Required GitHub Secrets

Configure these in `Settings > Secrets and variables > Actions`:

```
SERVER_HOST          # Your server IP or domain
SERVER_USERNAME      # SSH username
SERVER_SSH_KEY       # Private SSH key
VERCEL_TOKEN        # (Optional) For Vercel deployment
VERCEL_ORG_ID       # (Optional) For Vercel deployment
VERCEL_PROJECT_ID   # (Optional) For Vercel deployment
```

### Setup Instructions

1. **Enable GitHub Actions:**
   - Go to your repository's `Actions` tab
   - Enable workflows

2. **Configure Server Access:**
```bash
# Generate SSH key pair
ssh-keygen -t rsa -b 4096 -f ~/.ssh/portfolio_deploy

# Add public key to server
ssh-copy-id -i ~/.ssh/portfolio_deploy.pub user@your-server.com

# Add private key to GitHub Secrets
cat ~/.ssh/portfolio_deploy | pbcopy  # Copy to clipboard
```

3. **Prepare Server:**
```bash
# SSH into your server
ssh user@your-server.com

# Install Docker and Docker Compose
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Create deployment directory
sudo mkdir -p /var/www/portfolio
sudo chown $USER:$USER /var/www/portfolio
cd /var/www/portfolio

# Clone repository
git clone https://github.com/yourusername/portfolio.git .
```

4. **First Deployment:**
```bash
# On your server
cd /var/www/portfolio
docker-compose up -d
```

## 🌐 Deployment Platforms

### Option 1: VPS/Cloud Server (DigitalOcean, AWS, etc.)

**Using Docker Compose:**
```bash
# Clone and deploy
git clone https://github.com/yourusername/portfolio.git
cd portfolio
docker-compose up -d

# Set up Nginx reverse proxy
sudo apt install nginx
sudo nano /etc/nginx/sites-available/portfolio
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site and restart Nginx
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Install SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

### Option 2: Vercel (Easiest - No Docker needed)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 3: Railway

1. Connect your GitHub repository
2. Railway auto-detects Dockerfile
3. Deploy automatically on push

### Option 4: Render

1. Create new Web Service
2. Connect repository
3. Set build command: `docker build -t portfolio .`
4. Auto-deploys on git push

## 🔄 Auto-Deployment Workflow

Once configured, your deployment workflow:

1. **Push to GitHub** → CI runs automatically
2. **Merge to main** → Build Docker image
3. **Push to GHCR** → Store image in registry
4. **SSH to server** → Pull and restart container
5. **Live updates** → Zero-downtime deployment

## 📊 Monitoring

### View Logs
```bash
# Docker logs
docker logs portfolio -f

# Docker Compose logs
docker-compose logs -f
```

### Container Status
```bash
docker ps
docker stats portfolio
```

### Health Check
```bash
curl http://localhost:3000
```

## 🛠️ Useful Commands

```bash
# Rebuild and restart
docker-compose up -d --build

# Stop containers
docker-compose down

# Remove all containers and images
docker-compose down --rmi all

# Clean up unused Docker resources
docker system prune -af

# Update deployment
cd /var/www/portfolio
git pull origin main
docker-compose up -d --build
```

## 🔐 Security Best Practices

1. **Use environment variables** for sensitive data
2. **Enable firewall** on your server
3. **Keep Docker updated**
4. **Use non-root user** in Docker (already configured)
5. **Enable HTTPS** with Let's Encrypt
6. **Regular backups** of your server

## 📝 Notes

- The Dockerfile uses multi-stage builds for optimal image size
- Standalone output mode is enabled for Docker deployment
- CI/CD automatically tests builds before deployment
- GitHub Container Registry stores your Docker images

## 🆘 Troubleshooting

**Port already in use:**
```bash
sudo lsof -i :3000
sudo kill -9 <PID>
```

**Docker permission denied:**
```bash
sudo usermod -aG docker $USER
newgrp docker
```

**Deployment fails:**
- Check GitHub Actions logs
- Verify server SSH access
- Check Docker logs on server

---

For more help, check the Next.js Docker documentation or open an issue.
