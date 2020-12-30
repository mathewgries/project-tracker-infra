import S3Stack from "./S3Stack";
import CognitoStack from "./CognitoStack";
import ProjectsDBStack from "./ProjectsDBStack";

// Add stacks
export default function main(app) {
  new ProjectsDBStack(app, "projectsDb");

  const s3 = new S3Stack(app, "s3");

  new CognitoStack(app, "cognito", { bucketArn: s3.bucket.bucketArn });
}
