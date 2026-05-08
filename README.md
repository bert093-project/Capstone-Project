<div align="center">
<h1>Capstone Project</h1>
</div>

## Requirements

Make sure you have the following installed on your system:

```
Git (2.54.0 or newer)
Bun (1.3.13 or newer)
```

## How To Run This Project

1. Clone repository

```
git clone https://github.com/bert093-project/Capstone-Project
cd Capstone-Project
```

2. Install package/dependency:

```
bun i (or bun install)
```

3. Run the development server:

```
bun dev
```

<details>
<summary>An alternative method if you're comfortable with Docker (docker-compose.yaml)</summary>

1. Install Docker

If you're using an Arch Linux-based distribution, you can install it directly by running:

```
sudo pacman -S docker
sudo pacman -S docker-buildx (New docker engine)
sudo systemctl enable --now Docker.service (Enable docker service)
sudo usermod -aG docker $USER (configure user permission)
newgrp docker (applying changes. MUST RESTART after doing this)
```

2. Run the docker-compose.yaml
you can run Docker Compose with

```
docker compose up -d (Running in the background)
```

3. See the development server
you can see the development server active in

```
http://localhost:3001
```

</details>

## TechStack
- Next.js
- React.js
- Tailwind CSS
- Typescript
- Bun
- Docker (Dockerfile, docker-compose.yaml, .dockerignore)
- Ubuntu Server (Without Desktop Environment)

## Tools or Software Used In This Project
- OpenSSH (Client + Server)
- Tailscale
- Lazygit
- Lazydocker
- Dokploy
- Cloudflared

## References

## Folder Structure
