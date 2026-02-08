import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

if (!ENV.STREAM_API_KEY || !ENV.STREAM_API_SECRET) {
  throw new Error("❌ Stream API key or secret is missing");
}

export const chatClient = new StreamChat(
  ENV.STREAM_API_KEY,
  ENV.STREAM_API_SECRET
);

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUsers([userData]); // must be array
    console.log("✅ Stream user upserted:", userData.id);
  } catch (error) {
    console.error("❌ Error upserting Stream user:", error.message);
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId, { hard_delete: true });
    console.log("✅ Stream user deleted:", userId);
  } catch (error) {
    console.error("❌ Error deleting Stream user:", error.message);
  }
};
