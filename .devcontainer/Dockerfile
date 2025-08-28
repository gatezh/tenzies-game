# ℹ️ Same version is used in GitHub Actions deployment
# ⚠️ Remember to update GitHub Actions workflow if changing it here
ARG BUN_VERSION=1.2.20
FROM oven/bun:${BUN_VERSION}-alpine

# Config Bun
ENV PATH="~/.bun/bin:${PATH}"
RUN ln -s /usr/local/bin/bun /usr/local/bin/node

# Update packages
RUN if [ "alpine" == "alpine" ] ; then apk update ; else apt-get update ; fi

# Install Git
RUN if [ "alpine" == "alpine" ] ; then apk add git ; else apt-get install -y git ; fi
