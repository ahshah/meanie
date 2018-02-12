TAG:=$(shell date +%y.%m.%d)
.PHONY: all
all: MEAN.Dockerfile
	docker build --tag local/meanie:$(TAG) --file MEAN.Dockerfile .
