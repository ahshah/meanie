FROM ubuntu:16.04
RUN apt-get update && apt-get install -y software-properties-common
RUN groupadd -r dop -g 901 && useradd -u 901 -r -g dop -m dop
RUN add-apt-repository ppa:neovim-ppa/stable
RUN apt-get update
RUN apt-get install -y nodejs
RUn ln -s /usr/bin/nodejs /usr/bin/node
RUN apt-get install -y npm
RUN apt-get install -y git
RUN apt-get install -y neovim
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 58712A2291FA4AD5
RUN echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.6 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.6.list
RUN apt-get update && apt-get install -y mongodb-org
RUN git clone https://github.com/ahshah/vimprefs /root/.config/nvim
