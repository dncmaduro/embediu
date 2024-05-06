export const sendMessage = async (subject: string, message: string) => {
  const mail = useMail();

  mail.send({
    from: "Điệu như Chíp",
    subject: subject || "Em lại phải gửi lời tới anh rồi",
    text: message,
  });
};
