module.exports = {
  apps: [
    {
      name: "strapi",
      cwd: "cloned-strapi-project-directory/",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        DATABASE_HOST: "localhost",
        DATABASE_PORT: "5432",
        DATABASE_NAME: "your-db-name",
        DATABASE_USERNAME: "your-username",
        DATABASE_PASSWORD: "your-password",
      },
    },
  ],
};
