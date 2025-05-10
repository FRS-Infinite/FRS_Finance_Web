import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export default function Home() {
  const [saldo, setSaldo] = useState(0);
  const [contas, setContas] = useState([]);
  const [novaConta, setNovaConta] = useState('');
  const [transacoes, setTransacoes] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [orcamentos, setOrcamentos] = useState([]);
  const [meta, setMeta] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [novaCategoria, setNovaCategoria] = useState('');
  const [tipoCategoria, setTipoCategoria] = useState('despesa');

  useEffect(() => {
    async function fetchData() {
      const { data: contasData } = await supabase.from('contas').select('*');
      setContas(contasData);
      const total = contasData.reduce((acc, curr) => acc + Number(curr.saldo), 0);
      setSaldo(total);

      const { data: transacoesData } = await supabase.from('transacoes').select('*');
      setTransacoes(transacoesData);

      const { data: orcamentosData } = await supabase.from('orcamentos').select('*');
      setOrcamentos(orcamentosData);

      const { data: categoriasData } = await supabase.from('categorias').select('*');
      setCategorias(categoriasData);
    }
    fetchData();
  }, []);

  async function adicionarConta() {
    await supabase.from('contas').insert({ nome: novaConta, saldo: 0 });
    setNovaConta('');
    location.reload();
  }

  async function adicionarTransacao() {
    await supabase.from('transacoes').insert({ descricao, valor: parseFloat(valor), data: new Date().toISOString().split('T')[0] });
    setDescricao('');
    setValor('');
    location.reload();
  }

  async function adicionarOrcamento() {
    const hoje = new Date();
    await supabase.from('orcamentos').insert({ mes: hoje.getMonth() + 1, ano: hoje.getFullYear(), meta: parseFloat(meta), gasto: 0 });
    setMeta('');
    location.reload();
  }

  async function adicionarCategoria() {
    await supabase.from('categorias').insert({ nome: novaCategoria, tipo: tipoCategoria });
    setNovaCategoria('');
    location.reload();
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>FRS Finance - Web</h1>
      <h2>Saldo total: <span style={{ color: saldo < 0 ? 'red' : 'green' }}>R$ {saldo.toFixed(2).replace('.', ',')}</span></h2>

      <section>
        <h3>Contas:</h3>
        <ul>
          {contas.map((c) => (
            <li key={c.id}>{c.nome} - R$ {Number(c.saldo).toFixed(2).replace('.', ',')}</li>
          ))}
        </ul>
        <input placeholder="Nova conta" value={novaConta} onChange={(e) => setNovaConta(e.target.value)} />
        <button onClick={adicionarConta}>Adicionar Conta</button>
      </section>

      <section>
        <h3>Transações:</h3>
        <ul>
          {transacoes.map((t) => (
            <li key={t.id}>{t.data} - {t.descricao}: R$ {Number(t.valor).toFixed(2).replace('.', ',')}</li>
          ))}
        </ul>
        <input placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        <input placeholder="Valor" type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
        <button onClick={adicionarTransacao}>Adicionar Transação</button>
      </section>

      <section>
        <h3>Orçamentos:</h3>
        <ul>
          {orcamentos.map((o) => (
            <li key={o.id}>Mês: {o.mes}/{o.ano} | Meta: R$ {o.meta} | Gasto: R$ {o.gasto}</li>
          ))}
        </ul>
        <input placeholder="Meta" type="number" value={meta} onChange={(e) => setMeta(e.target.value)} />
        <button onClick={adicionarOrcamento}>Adicionar Orçamento</button>
      </section>

      <section>
        <h3>Categorias:</h3>
        <ul>
          {categorias.map((cat) => (
            <li key={cat.id}>{cat.nome} - {cat.tipo}</li>
          ))}
        </ul>
        <input placeholder="Categoria" value={novaCategoria} onChange={(e) => setNovaCategoria(e.target.value)} />
        <input placeholder="Tipo (receita ou despesa)" value={tipoCategoria} onChange={(e) => setTipoCategoria(e.target.value)} />
        <button onClick={adicionarCategoria}>Adicionar Categoria</button>
      </section>
    </main>
  );
}
