postedBy = (parent, args, context) => {
  context.prisma.link({ id: parent.id }).posteBy();
};

module.exports = { postedBy };
