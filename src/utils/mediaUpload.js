import { createClient } from "@supabase/supabase-js";

// Prefer env vars if you add them later, fallback to current values
const url = import.meta.env.VITE_SUPABASE_URL || "https://wuuvvscdnbgygkbjwgkk.supabase.co";
const key = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dXZ2c2NkbmJneWdrYmp3Z2trIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNjM1MzAsImV4cCI6MjA4MzkzOTUzMH0.LWrbWmjVLbSQsLsLS0KEceZ5dksyuG9ISxsEa7kADOQ";

const supabase = createClient(url, key);

// Upload a single file to the `images` bucket and return its public URL
export default async function uploadFile(file) {
	const timeStamp = Date.now();
	const fileName = `${timeStamp}_${file.name}`;

	// Supabase v2 returns { data, error } instead of throwing
	const { error } = await supabase.storage
		.from("pj images")
		.upload(fileName, file, {
			contentType: file.type,
			cacheControl: "3600",
			upsert: false,
		});

	if (error) {
		// Surface the storage error to callers
		throw error;
	}

	const { data } = supabase.storage.from("pj images").getPublicUrl(fileName);
	return data.publicUrl;
}