"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@aws-cdk/core");

var iam = _interopRequireWildcard(require("@aws-cdk/aws-iam"));

var cognito = _interopRequireWildcard(require("@aws-cdk/aws-cognito"));

var sst = _interopRequireWildcard(require("@serverless-stack/resources"));

var _CognitoAuthRole = _interopRequireDefault(require("./CognitoAuthRole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class CognitoStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    const {
      bucketArn
    } = props;
    const app = this.node.root;
    const userPool = new cognito.UserPool(this, "UserPool", {
      selfSignUpEnabled: true,
      // Allow users to sign up
      autoVerify: {
        email: true
      },
      // Verify email addresses by sending a verification code
      signInAliases: {
        email: true
      } // Set email as an alias

    });
    const userPoolClient = new cognito.UserPoolClient(this, "UserPoolClient", {
      userPool,
      generateSecret: false // Don't need to generate secret for web app running on browsers

    });
    const identityPool = new cognito.CfnIdentityPool(this, "IdentityPool", {
      allowUnauthenticatedIdentities: false,
      // Don't allow unathenticated users
      cognitoIdentityProviders: [{
        clientId: userPoolClient.userPoolClientId,
        providerName: userPool.userPoolProviderName
      }]
    });
    const authenticatedRole = new _CognitoAuthRole.default(this, "CognitoAuthRole", {
      identityPool
    });
    authenticatedRole.role.addToPolicy( // IAM policy for allowing users to upload to their own folder in the S3 bucket
    new iam.PolicyStatement({
      actions: ["s3:*"],
      effect: iam.Effect.ALLOW,
      resources: [bucketArn + "/private/${cognito-identity.amazonaws.com:sub}/*"]
    })); // Export values

    new _core.CfnOutput(this, "UserPoolId", {
      value: userPool.userPoolId
    });
    new _core.CfnOutput(this, "UserPoolClientId", {
      value: userPoolClient.userPoolClientId
    });
    new _core.CfnOutput(this, "IdentityPoolId", {
      value: identityPool.ref
    });
    new _core.CfnOutput(this, "AuthenticatedRoleName", {
      value: authenticatedRole.role.roleName,
      exportName: app.logicalPrefixedName("ProjectTrackerCognitoAuthRole")
    });
  }

}

exports.default = CognitoStack;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9Db2duaXRvU3RhY2suanMiXSwibmFtZXMiOlsiQ29nbml0b1N0YWNrIiwic3N0IiwiU3RhY2siLCJjb25zdHJ1Y3RvciIsInNjb3BlIiwiaWQiLCJwcm9wcyIsImJ1Y2tldEFybiIsImFwcCIsIm5vZGUiLCJyb290IiwidXNlclBvb2wiLCJjb2duaXRvIiwiVXNlclBvb2wiLCJzZWxmU2lnblVwRW5hYmxlZCIsImF1dG9WZXJpZnkiLCJlbWFpbCIsInNpZ25JbkFsaWFzZXMiLCJ1c2VyUG9vbENsaWVudCIsIlVzZXJQb29sQ2xpZW50IiwiZ2VuZXJhdGVTZWNyZXQiLCJpZGVudGl0eVBvb2wiLCJDZm5JZGVudGl0eVBvb2wiLCJhbGxvd1VuYXV0aGVudGljYXRlZElkZW50aXRpZXMiLCJjb2duaXRvSWRlbnRpdHlQcm92aWRlcnMiLCJjbGllbnRJZCIsInVzZXJQb29sQ2xpZW50SWQiLCJwcm92aWRlck5hbWUiLCJ1c2VyUG9vbFByb3ZpZGVyTmFtZSIsImF1dGhlbnRpY2F0ZWRSb2xlIiwiQ29nbml0b0F1dGhSb2xlIiwicm9sZSIsImFkZFRvUG9saWN5IiwiaWFtIiwiUG9saWN5U3RhdGVtZW50IiwiYWN0aW9ucyIsImVmZmVjdCIsIkVmZmVjdCIsIkFMTE9XIiwicmVzb3VyY2VzIiwiQ2ZuT3V0cHV0IiwidmFsdWUiLCJ1c2VyUG9vbElkIiwicmVmIiwicm9sZU5hbWUiLCJleHBvcnROYW1lIiwibG9naWNhbFByZWZpeGVkTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVlLE1BQU1BLFlBQU4sU0FBMkJDLEdBQUcsQ0FBQ0MsS0FBL0IsQ0FBcUM7QUFDbERDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxFQUFSLEVBQVlDLEtBQVosRUFBbUI7QUFDNUIsVUFBTUYsS0FBTixFQUFhQyxFQUFiLEVBQWlCQyxLQUFqQjtBQUVBLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFnQkQsS0FBdEI7QUFFQSxVQUFNRSxHQUFHLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxJQUF0QjtBQUVBLFVBQU1DLFFBQVEsR0FBRyxJQUFJQyxPQUFPLENBQUNDLFFBQVosQ0FBcUIsSUFBckIsRUFBMkIsVUFBM0IsRUFBdUM7QUFDdERDLE1BQUFBLGlCQUFpQixFQUFFLElBRG1DO0FBQzdCO0FBQ3pCQyxNQUFBQSxVQUFVLEVBQUU7QUFBRUMsUUFBQUEsS0FBSyxFQUFFO0FBQVQsT0FGMEM7QUFFekI7QUFDN0JDLE1BQUFBLGFBQWEsRUFBRTtBQUFFRCxRQUFBQSxLQUFLLEVBQUU7QUFBVCxPQUh1QyxDQUd0Qjs7QUFIc0IsS0FBdkMsQ0FBakI7QUFNQSxVQUFNRSxjQUFjLEdBQUcsSUFBSU4sT0FBTyxDQUFDTyxjQUFaLENBQTJCLElBQTNCLEVBQWlDLGdCQUFqQyxFQUFtRDtBQUN4RVIsTUFBQUEsUUFEd0U7QUFFeEVTLE1BQUFBLGNBQWMsRUFBRSxLQUZ3RCxDQUVqRDs7QUFGaUQsS0FBbkQsQ0FBdkI7QUFLQSxVQUFNQyxZQUFZLEdBQUcsSUFBSVQsT0FBTyxDQUFDVSxlQUFaLENBQTRCLElBQTVCLEVBQWtDLGNBQWxDLEVBQWtEO0FBQ3JFQyxNQUFBQSw4QkFBOEIsRUFBRSxLQURxQztBQUM5QjtBQUN2Q0MsTUFBQUEsd0JBQXdCLEVBQUUsQ0FDeEI7QUFDRUMsUUFBQUEsUUFBUSxFQUFFUCxjQUFjLENBQUNRLGdCQUQzQjtBQUVFQyxRQUFBQSxZQUFZLEVBQUVoQixRQUFRLENBQUNpQjtBQUZ6QixPQUR3QjtBQUYyQyxLQUFsRCxDQUFyQjtBQVVBLFVBQU1DLGlCQUFpQixHQUFHLElBQUlDLHdCQUFKLENBQW9CLElBQXBCLEVBQTBCLGlCQUExQixFQUE2QztBQUNyRVQsTUFBQUE7QUFEcUUsS0FBN0MsQ0FBMUI7QUFJQVEsSUFBQUEsaUJBQWlCLENBQUNFLElBQWxCLENBQXVCQyxXQUF2QixFQUNFO0FBQ0EsUUFBSUMsR0FBRyxDQUFDQyxlQUFSLENBQXdCO0FBQ3RCQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQyxNQUFELENBRGE7QUFFdEJDLE1BQUFBLE1BQU0sRUFBRUgsR0FBRyxDQUFDSSxNQUFKLENBQVdDLEtBRkc7QUFHdEJDLE1BQUFBLFNBQVMsRUFBRSxDQUNUaEMsU0FBUyxHQUFHLGtEQURIO0FBSFcsS0FBeEIsQ0FGRixFQWhDNEIsQ0EyQzVCOztBQUNBLFFBQUlpQyxlQUFKLENBQWMsSUFBZCxFQUFvQixZQUFwQixFQUFrQztBQUNoQ0MsTUFBQUEsS0FBSyxFQUFFOUIsUUFBUSxDQUFDK0I7QUFEZ0IsS0FBbEM7QUFHQSxRQUFJRixlQUFKLENBQWMsSUFBZCxFQUFvQixrQkFBcEIsRUFBd0M7QUFDdENDLE1BQUFBLEtBQUssRUFBRXZCLGNBQWMsQ0FBQ1E7QUFEZ0IsS0FBeEM7QUFHQSxRQUFJYyxlQUFKLENBQWMsSUFBZCxFQUFvQixnQkFBcEIsRUFBc0M7QUFDcENDLE1BQUFBLEtBQUssRUFBRXBCLFlBQVksQ0FBQ3NCO0FBRGdCLEtBQXRDO0FBR0EsUUFBSUgsZUFBSixDQUFjLElBQWQsRUFBb0IsdUJBQXBCLEVBQTZDO0FBQzNDQyxNQUFBQSxLQUFLLEVBQUVaLGlCQUFpQixDQUFDRSxJQUFsQixDQUF1QmEsUUFEYTtBQUUzQ0MsTUFBQUEsVUFBVSxFQUFFckMsR0FBRyxDQUFDc0MsbUJBQUosQ0FBd0IsK0JBQXhCO0FBRitCLEtBQTdDO0FBSUQ7O0FBMURpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENmbk91dHB1dCB9IGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpYW0gZnJvbSBcIkBhd3MtY2RrL2F3cy1pYW1cIjtcbmltcG9ydCAqIGFzIGNvZ25pdG8gZnJvbSBcIkBhd3MtY2RrL2F3cy1jb2duaXRvXCI7XG5pbXBvcnQgKiBhcyBzc3QgZnJvbSBcIkBzZXJ2ZXJsZXNzLXN0YWNrL3Jlc291cmNlc1wiO1xuaW1wb3J0IENvZ25pdG9BdXRoUm9sZSBmcm9tIFwiLi9Db2duaXRvQXV0aFJvbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29nbml0b1N0YWNrIGV4dGVuZHMgc3N0LlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGUsIGlkLCBwcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgeyBidWNrZXRBcm4gfSA9IHByb3BzO1xuXG4gICAgY29uc3QgYXBwID0gdGhpcy5ub2RlLnJvb3Q7XG5cbiAgICBjb25zdCB1c2VyUG9vbCA9IG5ldyBjb2duaXRvLlVzZXJQb29sKHRoaXMsIFwiVXNlclBvb2xcIiwge1xuICAgICAgc2VsZlNpZ25VcEVuYWJsZWQ6IHRydWUsIC8vIEFsbG93IHVzZXJzIHRvIHNpZ24gdXBcbiAgICAgIGF1dG9WZXJpZnk6IHsgZW1haWw6IHRydWUgfSwgLy8gVmVyaWZ5IGVtYWlsIGFkZHJlc3NlcyBieSBzZW5kaW5nIGEgdmVyaWZpY2F0aW9uIGNvZGVcbiAgICAgIHNpZ25JbkFsaWFzZXM6IHsgZW1haWw6IHRydWUgfSwgLy8gU2V0IGVtYWlsIGFzIGFuIGFsaWFzXG4gICAgfSk7XG5cbiAgICBjb25zdCB1c2VyUG9vbENsaWVudCA9IG5ldyBjb2duaXRvLlVzZXJQb29sQ2xpZW50KHRoaXMsIFwiVXNlclBvb2xDbGllbnRcIiwge1xuICAgICAgdXNlclBvb2wsXG4gICAgICBnZW5lcmF0ZVNlY3JldDogZmFsc2UsIC8vIERvbid0IG5lZWQgdG8gZ2VuZXJhdGUgc2VjcmV0IGZvciB3ZWIgYXBwIHJ1bm5pbmcgb24gYnJvd3NlcnNcbiAgICB9KTtcblxuICAgIGNvbnN0IGlkZW50aXR5UG9vbCA9IG5ldyBjb2duaXRvLkNmbklkZW50aXR5UG9vbCh0aGlzLCBcIklkZW50aXR5UG9vbFwiLCB7XG4gICAgICBhbGxvd1VuYXV0aGVudGljYXRlZElkZW50aXRpZXM6IGZhbHNlLCAvLyBEb24ndCBhbGxvdyB1bmF0aGVudGljYXRlZCB1c2Vyc1xuICAgICAgY29nbml0b0lkZW50aXR5UHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGllbnRJZDogdXNlclBvb2xDbGllbnQudXNlclBvb2xDbGllbnRJZCxcbiAgICAgICAgICBwcm92aWRlck5hbWU6IHVzZXJQb29sLnVzZXJQb29sUHJvdmlkZXJOYW1lLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZWRSb2xlID0gbmV3IENvZ25pdG9BdXRoUm9sZSh0aGlzLCBcIkNvZ25pdG9BdXRoUm9sZVwiLCB7XG4gICAgICBpZGVudGl0eVBvb2wsXG4gICAgfSk7XG5cbiAgICBhdXRoZW50aWNhdGVkUm9sZS5yb2xlLmFkZFRvUG9saWN5KFxuICAgICAgLy8gSUFNIHBvbGljeSBmb3IgYWxsb3dpbmcgdXNlcnMgdG8gdXBsb2FkIHRvIHRoZWlyIG93biBmb2xkZXIgaW4gdGhlIFMzIGJ1Y2tldFxuICAgICAgbmV3IGlhbS5Qb2xpY3lTdGF0ZW1lbnQoe1xuICAgICAgICBhY3Rpb25zOiBbXCJzMzoqXCJdLFxuICAgICAgICBlZmZlY3Q6IGlhbS5FZmZlY3QuQUxMT1csXG4gICAgICAgIHJlc291cmNlczogW1xuICAgICAgICAgIGJ1Y2tldEFybiArIFwiL3ByaXZhdGUvJHtjb2duaXRvLWlkZW50aXR5LmFtYXpvbmF3cy5jb206c3VifS8qXCIsXG4gICAgICAgIF0sXG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBFeHBvcnQgdmFsdWVzXG4gICAgbmV3IENmbk91dHB1dCh0aGlzLCBcIlVzZXJQb29sSWRcIiwge1xuICAgICAgdmFsdWU6IHVzZXJQb29sLnVzZXJQb29sSWQsXG4gICAgfSk7XG4gICAgbmV3IENmbk91dHB1dCh0aGlzLCBcIlVzZXJQb29sQ2xpZW50SWRcIiwge1xuICAgICAgdmFsdWU6IHVzZXJQb29sQ2xpZW50LnVzZXJQb29sQ2xpZW50SWQsXG4gICAgfSk7XG4gICAgbmV3IENmbk91dHB1dCh0aGlzLCBcIklkZW50aXR5UG9vbElkXCIsIHtcbiAgICAgIHZhbHVlOiBpZGVudGl0eVBvb2wucmVmLFxuICAgIH0pO1xuICAgIG5ldyBDZm5PdXRwdXQodGhpcywgXCJBdXRoZW50aWNhdGVkUm9sZU5hbWVcIiwge1xuICAgICAgdmFsdWU6IGF1dGhlbnRpY2F0ZWRSb2xlLnJvbGUucm9sZU5hbWUsXG4gICAgICBleHBvcnROYW1lOiBhcHAubG9naWNhbFByZWZpeGVkTmFtZShcIlByb2plY3RUcmFja2VyQ29nbml0b0F1dGhSb2xlXCIpLFxuICAgIH0pO1xuICB9XG59XG4iXX0=