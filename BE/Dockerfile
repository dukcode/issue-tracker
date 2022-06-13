## Dockerfile-prod
FROM openjdk:11

## 빌드 시
ARG JAR_FILE=/build/libs/issuetracker-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar

## 실행 시
ENTRYPOINT ["java","-jar","-Dspring.profiles.active=${PROFILE}","/app.jar"]
