# First web project

This is my first crack at web development. I'll be following along [Mozilla's
guide](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web) and building off of
that. Hopefully other newbies can also get some useful information from my example.

# Docker

Another goal was to understand how web-servers work. Since Docker is the Hot New Thing, why not
leverage it to make a standalone project?

## Getting started with Docker

First, make sure you have a Docker runtime on your machine. On OSX, there is [Docker
toolbox](https://www.docker.com/docker-toolbox). For a webserver, there is an [official Apache image](https://hub.docker.com/_/httpd/).

### Testing locally

With `docker-machine`, you have a virtual machine which hosts the containers that execute your
code. For a container that runs a webserver, you need to do 2 things before you can view the content
in your browser:

- Forward relevant ports from within the docker container
- Identify the IP address of your `docker-machine` VM to connect to via the browser

#### Forward ports

Assuming you are using apache's `httpd` image, run your container like this:

    docker run -it --rm -p 80:80 --name my-apache-app -v "$PWD":/usr/local/apache2/htdocs/ httpd:2.4

Notice the `-p 80:80`. This exposes port 80 in the running container to the outside world, so you
can connect to it. See [Docker
docs](https://docs.docker.com/engine/reference/run/#expose-incoming-ports) for more.

#### Identify the docker-machine IP address

Get a list of all running Docker VMs and their IP addresses with `docker-machine ls`. If you are new
to Docker, you probably just have one, labeled `default`. If you are running a Docker container with
forwarded ports, you should be able to enter that address into your browser (don't specify a port),
and see the content you want to serve.






