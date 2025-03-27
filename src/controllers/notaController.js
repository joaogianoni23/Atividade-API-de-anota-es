import notaModel from "../models/notaModel.js";

class NotaController {
  getAll = async (req, res) => {
    try {
      const notas = await notaModel.getAll();
      res.json(notas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar notas" });
    }
  };

  create = async (req, res) => {
    const { titulo, conteudo, favorita, cor  } = req.body;
    try {
      if (!titulo) {
        return res.status(400).json({ erro: "Título é Obrigatório" });
      }
      if (!conteudo) {
        return res.status(400).json({ erro: "Conteúdo é Obtigatório" });
      }
      if (!favorita) {
        return res.status(400).json({ erro: "Precisa informar se vai favoritar ou não" });
      }
      if (!cor) {
        return res.status(400).json({ erro: "Cor é obrigatória" });
      }

      const novaNota = await notaModel.create(titulo, conteudo, favorita, cor);
      res.status(201).json(novaNota);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar nota" });
    }

  };

  update = async (req, res) => {
    const { titulo, conteudo, favorita, cor } = req.body;
    const { id } = req.params;

    try {
      const notaAtualizada = await notaModel.update(
        parseInt(id),
        titulo,
        conteudo,
        favorita,
        cor
      );

      if (!notaAtualizada) {
        return res.status(404).json({ erro: "nota não encontrada" });
      }

      res.json(notaAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar nota" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await notaModel.delete(parseInt(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "nota não encontrada" });
      }

      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao excluir nota" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;

    try {
      const nota = await notaModel.getById(parseInt(id));

      if (!nota) {
        return res.status(404).json({ erro: "nota não encontrada" });
      }

      res.json(nota);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar nota" });
    }
  };
}

export default new NotaController();