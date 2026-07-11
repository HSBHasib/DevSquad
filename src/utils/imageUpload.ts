export const uploadImageToImageBB = async (file: File): Promise<string> => {
  const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

  if (!apiKey) {
    throw new Error("ImageBB Core Access Key (NEXT_PUBLIC_IMGBB_API_KEY) missing in runtime environment.");
  }

  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("CDN Network payload communication corrupted.");
  }

  const result = await response.json();

  if (result.success && result.data?.url) {
    return result.data.url;
  } else {
    throw new Error(result.error?.message || "ImageBB parsing failed.");
  }
};
