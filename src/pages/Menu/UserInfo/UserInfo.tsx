import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Text } from "../../../components";
import { useCart } from "../../../contexts/cardContext";
import {
  StyledPaymentMethod,
  StyledPaymentValue,
  StyledPaymentView,
} from "./UserInfo.styles";
import { finishPayment } from "../../../server/MenuAPI";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

type UserInfoProps = {
  updateCartSteps: (
    key: string,
    flavor: string,
    step: number,
    price: number
  ) => void;
};

const UserInfo: React.FC<UserInfoProps> = (props: UserInfoProps) => {
  const { cart, setCart } = useCart();
  const [isDone, setDoneTest] = useState<any>(undefined);

  let schema = yup.object().shape({
    fullName: yup.string().required("Esse campo é obrigatório"),
    address: yup.string().required("Esse campo é obrigatório"),
  });
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (form: any) => {
    props.updateCartSteps("full_name", form.fullName, 3, 0);
    props.updateCartSteps("address", form.address, 3, 0);
    finishPayment(cart).then((response) => {
      setDoneTest(response);
    });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Input
        placeholder={"Nome completo"}
        name={"fullName"}
        control={control}
      />
      <Input placeholder={"Endereço"} name={"address"} control={control} />
      <StyledPaymentView>
        <StyledPaymentValue>
          Preço: R${cart?.price?.toFixed(2)}
        </StyledPaymentValue>
        <StyledPaymentMethod>(pagar da entregar)</StyledPaymentMethod>
      </StyledPaymentView>
      <Button disabled={formState.isValid} type={"submit"}>
        Finalizar Pedido
      </Button>

      <br></br>
      <br></br>
      {isDone && (
        <>
          <Text color={"green"}>{isDone.message}, deseja reiniciar?</Text>
          <Text>Sabor: {cart.flavor}</Text>
          <Text>Massa: {cart.dough}</Text>
          <Text>Tamanho: {cart.size}</Text>
          <Text>Valor: R${cart?.price?.toFixed(2)}</Text>
          <Link
            to={"/"}
            onClick={() =>
              setCart({
                step: 0,
                flavor: "",
                dough: "",
                size: "",
                full_name: "",
                address: "",
                price: 0,
              })
            }
          >
            <Button>Reiniciar</Button>
          </Link>
        </>
      )}
    </form>
  );
};

export default UserInfo;
