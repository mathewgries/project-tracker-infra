"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = main;

var _S3Stack = _interopRequireDefault(require("./S3Stack"));

var _CognitoStack = _interopRequireDefault(require("./CognitoStack"));

var _ProjectsDBStack = _interopRequireDefault(require("./ProjectsDBStack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add stacks
function main(app) {
  new _ProjectsDBStack.default(app, "projectsDb");
  const s3 = new _S3Stack.default(app, "s3");
  new _CognitoStack.default(app, "cognito", {
    bucketArn: s3.bucket.bucketArn
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJtYWluIiwiYXBwIiwiUHJvamVjdHNEQlN0YWNrIiwiczMiLCJTM1N0YWNrIiwiQ29nbml0b1N0YWNrIiwiYnVja2V0QXJuIiwiYnVja2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTtBQUNlLFNBQVNBLElBQVQsQ0FBY0MsR0FBZCxFQUFtQjtBQUNoQyxNQUFJQyx3QkFBSixDQUFvQkQsR0FBcEIsRUFBeUIsWUFBekI7QUFFQSxRQUFNRSxFQUFFLEdBQUcsSUFBSUMsZ0JBQUosQ0FBWUgsR0FBWixFQUFpQixJQUFqQixDQUFYO0FBRUEsTUFBSUkscUJBQUosQ0FBaUJKLEdBQWpCLEVBQXNCLFNBQXRCLEVBQWlDO0FBQUVLLElBQUFBLFNBQVMsRUFBRUgsRUFBRSxDQUFDSSxNQUFILENBQVVEO0FBQXZCLEdBQWpDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUzNTdGFjayBmcm9tIFwiLi9TM1N0YWNrXCI7XG5pbXBvcnQgQ29nbml0b1N0YWNrIGZyb20gXCIuL0NvZ25pdG9TdGFja1wiO1xuaW1wb3J0IFByb2plY3RzREJTdGFjayBmcm9tIFwiLi9Qcm9qZWN0c0RCU3RhY2tcIjtcblxuLy8gQWRkIHN0YWNrc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbihhcHApIHtcbiAgbmV3IFByb2plY3RzREJTdGFjayhhcHAsIFwicHJvamVjdHNEYlwiKTtcblxuICBjb25zdCBzMyA9IG5ldyBTM1N0YWNrKGFwcCwgXCJzM1wiKTtcblxuICBuZXcgQ29nbml0b1N0YWNrKGFwcCwgXCJjb2duaXRvXCIsIHsgYnVja2V0QXJuOiBzMy5idWNrZXQuYnVja2V0QXJuIH0pO1xufVxuIl19