FROM alpine:3.18.3
RUN apk add --no-cache unzip openssh
ADD https://github.com/pocketbase/pocketbase/releases/download/v0.18.6/pocketbase_0.18.6_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/
COPY ./pb_hooks /pb/pb_hooks
RUN ls -la /pb
EXPOSE 8080
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]