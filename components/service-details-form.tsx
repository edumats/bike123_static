import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Service } from "@/app/types/definitions"

export default function ServiceForm({ service }: { service: Service }) {
    return (
      <div className="w-full max-w-[800px] mx-auto px-4 py-2 md:px-6 mb-12">
        <form className="space-y-4 md:space-y-6" method="POST" action="https://api.web3forms.com/submit">
          <input type="hidden" name="access_key" value="80f87aa0-b2d9-43fc-add2-7d6a7369e9bf" readOnly />
          <input type="checkbox" name="botcheck" className="hidden" />
          <input type="hidden" name="from_name" value="Bike123" readOnly />
          <input type="hidden" name="subject" value={service.name + " - Novo Serviço"} readOnly />
          <input type="hidden" name="redirect" value={service.purchaseLink} readOnly />
          <input id="service-type" value={service.name} hidden readOnly />
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Onde faremos o serviço?</h3>
            <div className="space-y-2">
              <Label htmlFor="cep">CEP<span className="text-red-600"> *</span></Label>
              <Input id="cep" name="cep" placeholder="CEP de onde será realizado o serviço" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Endereço<span className="text-red-600"> *</span></Label>
              <Input id="address" name="endereco" placeholder="Endereço onde será realizado o serviço" required/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address_complement">Complemento</Label>
              <Input id="address_complement" name="complemento" placeholder="Exemplo: Apartamento 56, Casa 06" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address_reference">Referência</Label>
              <Input id="address_reference" name="referencia" placeholder="Próximo à Rua Exemplo" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Dados da Bicicleta</h3>
            <div className="space-y-2">
              <Label htmlFor="brand">Marca e Modelo da Bicicleta<span className="text-red-600"> *</span></Label>
              <Input id="brand" name="modelo" placeholder="Exemplo: Caloi Urban 700" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="comments">Observações</Label>
              <Input id="comments" name="obs" placeholder="Adicione comentários importantes para nós ou o técnico" />
            </div>
          </div>
          
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Quem irá receber o técnico?</h3>
            <div className="space-y-2">
              <Label htmlFor="name">Nome<span className="text-red-600"> *</span></Label>
              <Input id="name" name="nome-recebedor" placeholder="Nome" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail<span className="text-red-600"> *</span></Label>
              <Input id="email" type="email" name="email-recebedor" placeholder="E-mail" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone com DDD<span className="text-red-600"> *</span></Label>
              <Input id="phone" name="telefone-recebedor" placeholder="Telefone" required />
            </div>
          </div>
          
          <Button type="submit" className="w-full md:w-auto bg-orange-400 hover:bg-orange-300 text-black">
            Enviar e Continuar para Pagamento
          </Button>
          <p className="font-light text-sm">Você será encaminhado para a página na PagSeguro para finalizar o pagamento</p>
        </form>
      </div>
    )
}