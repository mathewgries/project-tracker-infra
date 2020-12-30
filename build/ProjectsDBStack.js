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
    const table = new dynamodb.Table(this, "ProjectsTable", {
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

    new _core.CfnOutput(this, "ProjectsTableName", {
      value: table.tableName,
      exportName: app.logicalPrefixedName("ProjectsTableName")
    });
    new _core.CfnOutput(this, "ProjectsTableArn", {
      value: table.tableArn,
      exportName: app.logicalPrefixedName("ProjectsTableArn")
    });
  }

}

exports.default = ProjectsDBStack;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9Qcm9qZWN0c0RCU3RhY2suanMiXSwibmFtZXMiOlsiUHJvamVjdHNEQlN0YWNrIiwic3N0IiwiU3RhY2siLCJjb25zdHJ1Y3RvciIsInNjb3BlIiwiaWQiLCJwcm9wcyIsImFwcCIsIm5vZGUiLCJyb290IiwidGFibGUiLCJkeW5hbW9kYiIsIlRhYmxlIiwiYmlsbGluZ01vZGUiLCJCaWxsaW5nTW9kZSIsIlBBWV9QRVJfUkVRVUVTVCIsInNvcnRLZXkiLCJuYW1lIiwidHlwZSIsIkF0dHJpYnV0ZVR5cGUiLCJTVFJJTkciLCJwYXJ0aXRpb25LZXkiLCJDZm5PdXRwdXQiLCJ2YWx1ZSIsInRhYmxlTmFtZSIsImV4cG9ydE5hbWUiLCJsb2dpY2FsUHJlZml4ZWROYW1lIiwidGFibGVBcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRWUsTUFBTUEsZUFBTixTQUE4QkMsR0FBRyxDQUFDQyxLQUFsQyxDQUF3QztBQUNyREMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVFDLEVBQVIsRUFBWUMsS0FBWixFQUFtQjtBQUM1QixVQUFNRixLQUFOLEVBQWFDLEVBQWIsRUFBaUJDLEtBQWpCO0FBRUEsVUFBTUMsR0FBRyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsSUFBdEI7QUFFQSxVQUFNQyxLQUFLLEdBQUcsSUFBSUMsUUFBUSxDQUFDQyxLQUFiLENBQW1CLElBQW5CLEVBQXlCLGVBQXpCLEVBQTBDO0FBQ3REQyxNQUFBQSxXQUFXLEVBQUVGLFFBQVEsQ0FBQ0csV0FBVCxDQUFxQkMsZUFEb0I7QUFDSDtBQUNuREMsTUFBQUEsT0FBTyxFQUFFO0FBQUVDLFFBQUFBLElBQUksRUFBRSxXQUFSO0FBQXFCQyxRQUFBQSxJQUFJLEVBQUVQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QkM7QUFBbEQsT0FGNkM7QUFHdERDLE1BQUFBLFlBQVksRUFBRTtBQUFFSixRQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsUUFBQUEsSUFBSSxFQUFFUCxRQUFRLENBQUNRLGFBQVQsQ0FBdUJDO0FBQS9DO0FBSHdDLEtBQTFDLENBQWQsQ0FMNEIsQ0FXNUI7O0FBQ0EsUUFBSUUsZUFBSixDQUFjLElBQWQsRUFBb0IsbUJBQXBCLEVBQXlDO0FBQ3ZDQyxNQUFBQSxLQUFLLEVBQUViLEtBQUssQ0FBQ2MsU0FEMEI7QUFFdkNDLE1BQUFBLFVBQVUsRUFBRWxCLEdBQUcsQ0FBQ21CLG1CQUFKLENBQXdCLG1CQUF4QjtBQUYyQixLQUF6QztBQUlBLFFBQUlKLGVBQUosQ0FBYyxJQUFkLEVBQW9CLGtCQUFwQixFQUF3QztBQUN0Q0MsTUFBQUEsS0FBSyxFQUFFYixLQUFLLENBQUNpQixRQUR5QjtBQUV0Q0YsTUFBQUEsVUFBVSxFQUFFbEIsR0FBRyxDQUFDbUIsbUJBQUosQ0FBd0Isa0JBQXhCO0FBRjBCLEtBQXhDO0FBSUQ7O0FBckJvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENmbk91dHB1dCB9IGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XG5pbXBvcnQgKiBhcyBkeW5hbW9kYiBmcm9tIFwiQGF3cy1jZGsvYXdzLWR5bmFtb2RiXCI7XG5pbXBvcnQgKiBhcyBzc3QgZnJvbSBcIkBzZXJ2ZXJsZXNzLXN0YWNrL3Jlc291cmNlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0c0RCU3RhY2sgZXh0ZW5kcyBzc3QuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZSwgaWQsIHByb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBhcHAgPSB0aGlzLm5vZGUucm9vdDtcblxuICAgIGNvbnN0IHRhYmxlID0gbmV3IGR5bmFtb2RiLlRhYmxlKHRoaXMsIFwiUHJvamVjdHNUYWJsZVwiLCB7XG4gICAgICBiaWxsaW5nTW9kZTogZHluYW1vZGIuQmlsbGluZ01vZGUuUEFZX1BFUl9SRVFVRVNULCAvLyBVc2Ugb24tZGVtYW5kIGJpbGxpbmcgbW9kZVxuICAgICAgc29ydEtleTogeyBuYW1lOiBcInByb2plY3RJZFwiLCB0eXBlOiBkeW5hbW9kYi5BdHRyaWJ1dGVUeXBlLlNUUklORyB9LFxuICAgICAgcGFydGl0aW9uS2V5OiB7IG5hbWU6IFwidXNlcklkXCIsIHR5cGU6IGR5bmFtb2RiLkF0dHJpYnV0ZVR5cGUuU1RSSU5HIH0sXG4gICAgfSk7XG5cbiAgICAvLyBPdXRwdXQgdmFsdWVzXG4gICAgbmV3IENmbk91dHB1dCh0aGlzLCBcIlByb2plY3RzVGFibGVOYW1lXCIsIHtcbiAgICAgIHZhbHVlOiB0YWJsZS50YWJsZU5hbWUsXG4gICAgICBleHBvcnROYW1lOiBhcHAubG9naWNhbFByZWZpeGVkTmFtZShcIlByb2plY3RzVGFibGVOYW1lXCIpLFxuICAgIH0pO1xuICAgIG5ldyBDZm5PdXRwdXQodGhpcywgXCJQcm9qZWN0c1RhYmxlQXJuXCIsIHtcbiAgICAgIHZhbHVlOiB0YWJsZS50YWJsZUFybixcbiAgICAgIGV4cG9ydE5hbWU6IGFwcC5sb2dpY2FsUHJlZml4ZWROYW1lKFwiUHJvamVjdHNUYWJsZUFyblwiKSxcbiAgICB9KTtcbiAgfVxufVxuIl19