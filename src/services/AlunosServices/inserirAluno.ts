import execQuery from '../execQuery';

async function inserirAluno(aluno) {
  try {
    const resultado = await execQuery.execQuery(`INSERT into alunos VALUES ('${aluno.nome}')`);
  } catch (erro) {
    console.log(erro);
  }
}

export default inserirAluno;
