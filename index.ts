import { createClient } from "tigerbeetle-node";

async function main() {
  const tigerbeetleClient = createClient({
    cluster_id: BigInt(0),
    concurrency_max: 1,
    replica_addresses: ["127.0.0.1:3000"],
  });

  await tigerbeetleClient.lookupAccounts([BigInt(1)])
}

main();
