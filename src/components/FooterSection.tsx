const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-background py-12 sm:py-16">
      <div className="container px-5 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-serif text-lg font-semibold text-foreground">
              Dr. Felipe Mendes
            </span>
            <p className="mt-2 text-sm text-muted-foreground">
              Psiquiatra - CRM 142.857/SP
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              RQE 28.340
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contato
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>(11) 98742-3100</p>
              <p>contato@drfelipemendes.com.br</p>
            </div>
          </div>

          {/* Endereco */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Endereco
            </h4>
            <p className="text-sm text-muted-foreground">
              R. Augusta, 2840 - Sala 74<br />
              Cerqueira Cesar, Sao Paulo - SP<br />
              CEP 01412-100
            </p>
          </div>

          {/* Horario */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Horario
            </h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Segunda a Sexta</p>
              <p>8h as 18h</p>
            </div>
          </div>
        </div>

        {/* Important info */}
        <div className="mt-12 border-t border-border pt-8">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
            Informacoes Importantes
          </h4>
          <div className="space-y-2 text-xs leading-relaxed text-muted-foreground">
            <p>
              1) Primeira consulta: R$ 800,00. Consultas de retorno: R$ 600,00.
              Pagamento via PIX, transferencia bancaria ou cartao.
            </p>
            <p>
              2) O tempo da consulta e de aproximadamente 50 minutos, podendo
              variar conforme a complexidade do caso.
            </p>
            <p>
              3) Cancelamentos devem ser feitos com no minimo 24 horas de
              antecedencia. Cancelamentos tardios ou faltas estao sujeitos a
              cobranca de 50% do valor da consulta.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            2026 Dr. Felipe Mendes - Psiquiatria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
