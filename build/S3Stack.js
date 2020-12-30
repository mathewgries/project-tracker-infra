"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var cdk = _interopRequireWildcard(require("@aws-cdk/core"));

var s3 = _interopRequireWildcard(require("@aws-cdk/aws-s3"));

var sst = _interopRequireWildcard(require("@serverless-stack/resources"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class S3Stack extends sst.Stack {
  // Public reference to the S3 bucket
  constructor(scope, id, props) {
    super(scope, id, props);

    _defineProperty(this, "bucket", void 0);

    this.bucket = new s3.Bucket(this, "Uploads", {
      // Allow client side access to the bucket from a different domain
      cors: [{
        maxAge: 3000,
        allowedOrigins: ["*"],
        allowedHeaders: ["*"],
        allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"]
      }]
    }); // Export values

    new cdk.CfnOutput(this, "AttachmentsBucketName", {
      value: this.bucket.bucketName
    });
  }

}

exports.default = S3Stack;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9TM1N0YWNrLmpzIl0sIm5hbWVzIjpbIlMzU3RhY2siLCJzc3QiLCJTdGFjayIsImNvbnN0cnVjdG9yIiwic2NvcGUiLCJpZCIsInByb3BzIiwiYnVja2V0IiwiczMiLCJCdWNrZXQiLCJjb3JzIiwibWF4QWdlIiwiYWxsb3dlZE9yaWdpbnMiLCJhbGxvd2VkSGVhZGVycyIsImFsbG93ZWRNZXRob2RzIiwiY2RrIiwiQ2ZuT3V0cHV0IiwidmFsdWUiLCJidWNrZXROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRWUsTUFBTUEsT0FBTixTQUFzQkMsR0FBRyxDQUFDQyxLQUExQixDQUFnQztBQUM3QztBQUdBQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUUMsRUFBUixFQUFZQyxLQUFaLEVBQW1CO0FBQzVCLFVBQU1GLEtBQU4sRUFBYUMsRUFBYixFQUFpQkMsS0FBakI7O0FBRDRCOztBQUc1QixTQUFLQyxNQUFMLEdBQWMsSUFBSUMsRUFBRSxDQUFDQyxNQUFQLENBQWMsSUFBZCxFQUFvQixTQUFwQixFQUErQjtBQUMzQztBQUNBQyxNQUFBQSxJQUFJLEVBQUUsQ0FDSjtBQUNFQyxRQUFBQSxNQUFNLEVBQUUsSUFEVjtBQUVFQyxRQUFBQSxjQUFjLEVBQUUsQ0FBQyxHQUFELENBRmxCO0FBR0VDLFFBQUFBLGNBQWMsRUFBRSxDQUFDLEdBQUQsQ0FIbEI7QUFJRUMsUUFBQUEsY0FBYyxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLEVBQXVCLFFBQXZCLEVBQWlDLE1BQWpDO0FBSmxCLE9BREk7QUFGcUMsS0FBL0IsQ0FBZCxDQUg0QixDQWU1Qjs7QUFDQSxRQUFJQyxHQUFHLENBQUNDLFNBQVIsQ0FBa0IsSUFBbEIsRUFBd0IsdUJBQXhCLEVBQWlEO0FBQy9DQyxNQUFBQSxLQUFLLEVBQUUsS0FBS1YsTUFBTCxDQUFZVztBQUQ0QixLQUFqRDtBQUdEOztBQXZCNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSBcIkBhd3MtY2RrL2NvcmVcIjtcbmltcG9ydCAqIGFzIHMzIGZyb20gXCJAYXdzLWNkay9hd3MtczNcIjtcbmltcG9ydCAqIGFzIHNzdCBmcm9tIFwiQHNlcnZlcmxlc3Mtc3RhY2svcmVzb3VyY2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFMzU3RhY2sgZXh0ZW5kcyBzc3QuU3RhY2sge1xuICAvLyBQdWJsaWMgcmVmZXJlbmNlIHRvIHRoZSBTMyBidWNrZXRcbiAgYnVja2V0O1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlLCBpZCwgcHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIHRoaXMuYnVja2V0ID0gbmV3IHMzLkJ1Y2tldCh0aGlzLCBcIlVwbG9hZHNcIiwge1xuICAgICAgLy8gQWxsb3cgY2xpZW50IHNpZGUgYWNjZXNzIHRvIHRoZSBidWNrZXQgZnJvbSBhIGRpZmZlcmVudCBkb21haW5cbiAgICAgIGNvcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1heEFnZTogMzAwMCxcbiAgICAgICAgICBhbGxvd2VkT3JpZ2luczogW1wiKlwiXSxcbiAgICAgICAgICBhbGxvd2VkSGVhZGVyczogW1wiKlwiXSxcbiAgICAgICAgICBhbGxvd2VkTWV0aG9kczogW1wiR0VUXCIsIFwiUFVUXCIsIFwiUE9TVFwiLCBcIkRFTEVURVwiLCBcIkhFQURcIl0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy8gRXhwb3J0IHZhbHVlc1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsIFwiQXR0YWNobWVudHNCdWNrZXROYW1lXCIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLmJ1Y2tldC5idWNrZXROYW1lLFxuICAgIH0pO1xuICB9XG59XG4iXX0=