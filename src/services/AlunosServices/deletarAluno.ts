import execQuery from '../execQuery';

async function deletarAluno(aluno) {
  try {
    const resultado = await execQuery.execQuery(`DELETE FROM alunos WHERE alunos.nome = '${aluno.nome}'`);
  } catch (erro) {
    console.log(erro);
  }
}

export default deletarAluno;
