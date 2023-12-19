"use server";

export const SendEmail = async (formData: FormData) => {
  console.log(formData.get("senderEmail"));
};
