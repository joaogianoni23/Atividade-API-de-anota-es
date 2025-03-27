import prisma from "../../prisma/client.js";

class NotaModel {
  getAll = async () => {
    return await prisma.nota.findMany();
  };

  create = async (titulo, conteudo, favorita, cor) => {
    return await prisma.nota.create({
      data: {
        titulo,
        conteudo,
        favorita,
        cor
      },
    });
  };

  update = async (id, titulo, conteudo, favorita, cor) => {
    try {
      return await prisma.nota.update({
        where: { id },
        data: {
          titulo,
          conteudo,
          favorita,
          cor,
        },
      });
    } catch (error) {
      if (error.code === "P2025") {
        return null;
      }
      throw error;
    }
  };

  delete = async (id) => {
    try {
      await prisma.nota.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      if (error.code === "P2025") {
        return false;
      }
      throw error;
    }
  };

  getById = async (id) => {
    console.log("id", id);
    return await prisma.nota.findUnique({
      where: { id },
    });
  };
}

export default new NotaModel();