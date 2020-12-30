"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@aws-cdk/core");

var dynamodb = _interopRequireWildcard(require("@aws-cdk/aws-dynamodb"));

var sst = _interopRequireWildcard(require("@serverless-stack/resources"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class DynamoDBStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    const app = this.node.root;
    const table = new dynamodb.Table(this, "Table", {
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      // Use on-demand billing mode
      sortKey: {
        name: "projectId",
        type: dynamodb.AttributeType.STRING
      },
      partitionKey: {
        name: "userId",
        type: dynamodb.AttributeType.STRING
      }
    }); // Output values

    new _core.CfnOutput(this, "TableName", {
      value: table.tableName,
      exportName: app.logicalPrefixedName("TableName")
    });
    new _core.CfnOutput(this, "TableArn", {
      value: table.tableArn,
      exportName: app.logicalPrefixedName("TableArn")
    });
  }

}

exports.default = DynamoDBStack;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9EeW5hbW9EQlN0YWNrLmpzIl0sIm5hbWVzIjpbIkR5bmFtb0RCU3RhY2siLCJzc3QiLCJTdGFjayIsImNvbnN0cnVjdG9yIiwic2NvcGUiLCJpZCIsInByb3BzIiwiYXBwIiwibm9kZSIsInJvb3QiLCJ0YWJsZSIsImR5bmFtb2RiIiwiVGFibGUiLCJiaWxsaW5nTW9kZSIsIkJpbGxpbmdNb2RlIiwiUEFZX1BFUl9SRVFVRVNUIiwic29ydEtleSIsIm5hbWUiLCJ0eXBlIiwiQXR0cmlidXRlVHlwZSIsIlNUUklORyIsInBhcnRpdGlvbktleSIsIkNmbk91dHB1dCIsInZhbHVlIiwidGFibGVOYW1lIiwiZXhwb3J0TmFtZSIsImxvZ2ljYWxQcmVmaXhlZE5hbWUiLCJ0YWJsZUFybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFZSxNQUFNQSxhQUFOLFNBQTRCQyxHQUFHLENBQUNDLEtBQWhDLENBQXNDO0FBQ25EQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUUMsRUFBUixFQUFZQyxLQUFaLEVBQW1CO0FBQzVCLFVBQU1GLEtBQU4sRUFBYUMsRUFBYixFQUFpQkMsS0FBakI7QUFFQSxVQUFNQyxHQUFHLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxJQUF0QjtBQUVBLFVBQU1DLEtBQUssR0FBRyxJQUFJQyxRQUFRLENBQUNDLEtBQWIsQ0FBbUIsSUFBbkIsRUFBeUIsT0FBekIsRUFBa0M7QUFDOUNDLE1BQUFBLFdBQVcsRUFBRUYsUUFBUSxDQUFDRyxXQUFULENBQXFCQyxlQURZO0FBQ0s7QUFDbkRDLE1BQUFBLE9BQU8sRUFBRTtBQUFFQyxRQUFBQSxJQUFJLEVBQUUsV0FBUjtBQUFxQkMsUUFBQUEsSUFBSSxFQUFFUCxRQUFRLENBQUNRLGFBQVQsQ0FBdUJDO0FBQWxELE9BRnFDO0FBRzlDQyxNQUFBQSxZQUFZLEVBQUU7QUFBRUosUUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLFFBQUFBLElBQUksRUFBRVAsUUFBUSxDQUFDUSxhQUFULENBQXVCQztBQUEvQztBQUhnQyxLQUFsQyxDQUFkLENBTDRCLENBVzVCOztBQUNBLFFBQUlFLGVBQUosQ0FBYyxJQUFkLEVBQW9CLFdBQXBCLEVBQWlDO0FBQy9CQyxNQUFBQSxLQUFLLEVBQUViLEtBQUssQ0FBQ2MsU0FEa0I7QUFFL0JDLE1BQUFBLFVBQVUsRUFBRWxCLEdBQUcsQ0FBQ21CLG1CQUFKLENBQXdCLFdBQXhCO0FBRm1CLEtBQWpDO0FBSUEsUUFBSUosZUFBSixDQUFjLElBQWQsRUFBb0IsVUFBcEIsRUFBZ0M7QUFDOUJDLE1BQUFBLEtBQUssRUFBRWIsS0FBSyxDQUFDaUIsUUFEaUI7QUFFOUJGLE1BQUFBLFVBQVUsRUFBRWxCLEdBQUcsQ0FBQ21CLG1CQUFKLENBQXdCLFVBQXhCO0FBRmtCLEtBQWhDO0FBSUQ7O0FBckJrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENmbk91dHB1dCB9IGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XG5pbXBvcnQgKiBhcyBkeW5hbW9kYiBmcm9tIFwiQGF3cy1jZGsvYXdzLWR5bmFtb2RiXCI7XG5pbXBvcnQgKiBhcyBzc3QgZnJvbSBcIkBzZXJ2ZXJsZXNzLXN0YWNrL3Jlc291cmNlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbW9EQlN0YWNrIGV4dGVuZHMgc3N0LlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGUsIGlkLCBwcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgYXBwID0gdGhpcy5ub2RlLnJvb3Q7XG5cbiAgICBjb25zdCB0YWJsZSA9IG5ldyBkeW5hbW9kYi5UYWJsZSh0aGlzLCBcIlRhYmxlXCIsIHtcbiAgICAgIGJpbGxpbmdNb2RlOiBkeW5hbW9kYi5CaWxsaW5nTW9kZS5QQVlfUEVSX1JFUVVFU1QsIC8vIFVzZSBvbi1kZW1hbmQgYmlsbGluZyBtb2RlXG4gICAgICBzb3J0S2V5OiB7IG5hbWU6IFwicHJvamVjdElkXCIsIHR5cGU6IGR5bmFtb2RiLkF0dHJpYnV0ZVR5cGUuU1RSSU5HIH0sXG4gICAgICBwYXJ0aXRpb25LZXk6IHsgbmFtZTogXCJ1c2VySWRcIiwgdHlwZTogZHluYW1vZGIuQXR0cmlidXRlVHlwZS5TVFJJTkcgfSxcbiAgICB9KTtcblxuICAgIC8vIE91dHB1dCB2YWx1ZXNcbiAgICBuZXcgQ2ZuT3V0cHV0KHRoaXMsIFwiVGFibGVOYW1lXCIsIHtcbiAgICAgIHZhbHVlOiB0YWJsZS50YWJsZU5hbWUsXG4gICAgICBleHBvcnROYW1lOiBhcHAubG9naWNhbFByZWZpeGVkTmFtZShcIlRhYmxlTmFtZVwiKSxcbiAgICB9KTtcbiAgICBuZXcgQ2ZuT3V0cHV0KHRoaXMsIFwiVGFibGVBcm5cIiwge1xuICAgICAgdmFsdWU6IHRhYmxlLnRhYmxlQXJuLFxuICAgICAgZXhwb3J0TmFtZTogYXBwLmxvZ2ljYWxQcmVmaXhlZE5hbWUoXCJUYWJsZUFyblwiKSxcbiAgICB9KTtcbiAgfVxufVxuIl19