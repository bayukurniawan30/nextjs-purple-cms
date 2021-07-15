# Nextjs with Purple CMS as Headless CMS

[Indonesian Version](README.id.md)

This is an example of using Nextjs and Purple CMS as headless CMS. Purple CMS has a new features, Headless CMS. Yeeah, a very useful feature for front end developer. Create and manage your content in Purple CMS, fetch the content in Nextjs using fetch API. It's so cool man.

[Demo Link]()

### Nextjs

Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites. 

[Learn more about Nextjs](https://nextjs.org/)

### Purple CMS

Purple CMS is a Content Management System built with the CakePHP 3 framework. The goal is to make it easier for developers to create a website, either simple or complex.

[Learn more about Purple CMS](https://github.com/bayukurniawan30/purple-cms)

### Cara Instalasi

Clone or download this repo, and run the command below

```
npm install
```

Download and install Purple CMS. Create some content in Collections or Singletons. To check the output of the API call, you can click the API Endpoint button.

Copy env.example file to .env.local, and fill the value for **NEXT_PUBLIC_PURPLE_URL** and **PURPLE_KEY**. NEXT_PUBLIC_PURPLE_URL is an url where Purple CMS can be accessed, for example *http://localhost/purple-cms*. PURPLE_KEY is access key to access Purple CMS API, you can get yours at Settings → API.

Add your domain or localhost in next.config.js file in the images array section to avoid errors due to using images from outside the project folder.

For *path* in the fetch API, you can change it and adapt to what content you've created in Purple CMS.

Run the command below to start development server
```
npm run dev
```