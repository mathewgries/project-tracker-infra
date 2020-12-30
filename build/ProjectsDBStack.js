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

class ProjectsDBStack extends sst.Stack {
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

exports.default = ProjectsDBStack;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9Qcm9qZWN0c0RCU3RhY2suanMiXSwibmFtZXMiOlsiUHJvamVjdHNEQlN0YWNrIiwic3N0IiwiU3RhY2siLCJjb25zdHJ1Y3RvciIsInNjb3BlIiwiaWQiLCJwcm9wcyIsImFwcCIsIm5vZGUiLCJyb290IiwidGFibGUiLCJkeW5hbW9kYiIsIlRhYmxlIiwiYmlsbGluZ01vZGUiLCJCaWxsaW5nTW9kZSIsIlBBWV9QRVJfUkVRVUVTVCIsInNvcnRLZXkiLCJuYW1lIiwidHlwZSIsIkF0dHJpYnV0ZVR5cGUiLCJTVFJJTkciLCJwYXJ0aXRpb25LZXkiLCJDZm5PdXRwdXQiLCJ2YWx1ZSIsInRhYmxlTmFtZSIsImV4cG9ydE5hbWUiLCJsb2dpY2FsUHJlZml4ZWROYW1lIiwidGFibGVBcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRWUsTUFBTUEsZUFBTixTQUE4QkMsR0FBRyxDQUFDQyxLQUFsQyxDQUF3QztBQUNyREMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVFDLEVBQVIsRUFBWUMsS0FBWixFQUFtQjtBQUM1QixVQUFNRixLQUFOLEVBQWFDLEVBQWIsRUFBaUJDLEtBQWpCO0FBRUEsVUFBTUMsR0FBRyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsSUFBdEI7QUFFQSxVQUFNQyxLQUFLLEdBQUcsSUFBSUMsUUFBUSxDQUFDQyxLQUFiLENBQW1CLElBQW5CLEVBQXlCLE9BQXpCLEVBQWtDO0FBQzlDQyxNQUFBQSxXQUFXLEVBQUVGLFFBQVEsQ0FBQ0csV0FBVCxDQUFxQkMsZUFEWTtBQUNLO0FBQ25EQyxNQUFBQSxPQUFPLEVBQUU7QUFBRUMsUUFBQUEsSUFBSSxFQUFFLFdBQVI7QUFBcUJDLFFBQUFBLElBQUksRUFBRVAsUUFBUSxDQUFDUSxhQUFULENBQXVCQztBQUFsRCxPQUZxQztBQUc5Q0MsTUFBQUEsWUFBWSxFQUFFO0FBQUVKLFFBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxRQUFBQSxJQUFJLEVBQUVQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QkM7QUFBL0M7QUFIZ0MsS0FBbEMsQ0FBZCxDQUw0QixDQVc1Qjs7QUFDQSxRQUFJRSxlQUFKLENBQWMsSUFBZCxFQUFvQixXQUFwQixFQUFpQztBQUMvQkMsTUFBQUEsS0FBSyxFQUFFYixLQUFLLENBQUNjLFNBRGtCO0FBRS9CQyxNQUFBQSxVQUFVLEVBQUVsQixHQUFHLENBQUNtQixtQkFBSixDQUF3QixXQUF4QjtBQUZtQixLQUFqQztBQUlBLFFBQUlKLGVBQUosQ0FBYyxJQUFkLEVBQW9CLFVBQXBCLEVBQWdDO0FBQzlCQyxNQUFBQSxLQUFLLEVBQUViLEtBQUssQ0FBQ2lCLFFBRGlCO0FBRTlCRixNQUFBQSxVQUFVLEVBQUVsQixHQUFHLENBQUNtQixtQkFBSixDQUF3QixVQUF4QjtBQUZrQixLQUFoQztBQUlEOztBQXJCb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZm5PdXRwdXQgfSBmcm9tIFwiQGF3cy1jZGsvY29yZVwiO1xuaW1wb3J0ICogYXMgZHluYW1vZGIgZnJvbSBcIkBhd3MtY2RrL2F3cy1keW5hbW9kYlwiO1xuaW1wb3J0ICogYXMgc3N0IGZyb20gXCJAc2VydmVybGVzcy1zdGFjay9yZXNvdXJjZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHNEQlN0YWNrIGV4dGVuZHMgc3N0LlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGUsIGlkLCBwcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgYXBwID0gdGhpcy5ub2RlLnJvb3Q7XG5cbiAgICBjb25zdCB0YWJsZSA9IG5ldyBkeW5hbW9kYi5UYWJsZSh0aGlzLCBcIlRhYmxlXCIsIHtcbiAgICAgIGJpbGxpbmdNb2RlOiBkeW5hbW9kYi5CaWxsaW5nTW9kZS5QQVlfUEVSX1JFUVVFU1QsIC8vIFVzZSBvbi1kZW1hbmQgYmlsbGluZyBtb2RlXG4gICAgICBzb3J0S2V5OiB7IG5hbWU6IFwicHJvamVjdElkXCIsIHR5cGU6IGR5bmFtb2RiLkF0dHJpYnV0ZVR5cGUuU1RSSU5HIH0sXG4gICAgICBwYXJ0aXRpb25LZXk6IHsgbmFtZTogXCJ1c2VySWRcIiwgdHlwZTogZHluYW1vZGIuQXR0cmlidXRlVHlwZS5TVFJJTkcgfSxcbiAgICB9KTtcblxuICAgIC8vIE91dHB1dCB2YWx1ZXNcbiAgICBuZXcgQ2ZuT3V0cHV0KHRoaXMsIFwiVGFibGVOYW1lXCIsIHtcbiAgICAgIHZhbHVlOiB0YWJsZS50YWJsZU5hbWUsXG4gICAgICBleHBvcnROYW1lOiBhcHAubG9naWNhbFByZWZpeGVkTmFtZShcIlRhYmxlTmFtZVwiKSxcbiAgICB9KTtcbiAgICBuZXcgQ2ZuT3V0cHV0KHRoaXMsIFwiVGFibGVBcm5cIiwge1xuICAgICAgdmFsdWU6IHRhYmxlLnRhYmxlQXJuLFxuICAgICAgZXhwb3J0TmFtZTogYXBwLmxvZ2ljYWxQcmVmaXhlZE5hbWUoXCJUYWJsZUFyblwiKSxcbiAgICB9KTtcbiAgfVxufVxuIl19