import { CfnOutput } from "@aws-cdk/core";
import * as dynamodb from "@aws-cdk/aws-dynamodb";
import * as sst from "@serverless-stack/resources";

export default class TodosDBStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const app = this.node.root;

    const table = new dynamodb.Table(this, "TodosTable", {
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST, // Use on-demand billing mode
      sortKey: { name: "todoId", type: dynamodb.AttributeType.STRING },
      partitionKey: { name: "userId", type: dynamodb.AttributeType.STRING },
    });

    // Output values
    new CfnOutput(this, "TodosTableName", {
      value: table.tableName,
      exportName: app.logicalPrefixedName("TodosTableName"),
    });
    new CfnOutput(this, "TodosTableArn", {
      value: table.tableArn,
      exportName: app.logicalPrefixedName("TodosTableArn"),
    });
  }
}
