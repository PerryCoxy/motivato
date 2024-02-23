'use client'

import { MOTIVATO_PAGES } from "@/config/pages-url.config"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { authService } from "@/services/auth.service"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { IAuthForm } from "@/types/auth.types"
import { toast } from "sonner"

import { Button, TextField } from '@mui/material'
import { Heading } from "@/components/ui/Heading"
export function Auth() {

  const { handleSubmit, reset, control } = useForm<IAuthForm>({
    mode: 'onChange'
  })

  const { push } = useRouter()

  const { mutate } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: IAuthForm) => authService.main('login', data),
    onSuccess: () => {
      toast.success('Вы успешно авторизовались')
      reset()
      push(MOTIVATO_PAGES.HOME)
    },
    onError: () => {
      toast.error('Неверный логин или пароль')

    }
  })

  const onSubmit: SubmitHandler<IAuthForm> = (data: IAuthForm) => {
    mutate(data)
  }

  return (
    <div className="flex min-h-screen">
      <form
        className="w-1/4 m-auto shadow rounded-xl p-layout flex flex-col gap-layout"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading title="Войти в систему" />

        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              id="email"
              label="Email"
              variant="standard"
              required
              {...field} />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              id="password"
              label="Пароль"
              variant="standard"
              type="password"
              required
              {...field} />
          )}
        />

        <Button
          id="submit"
          variant="contained"
          type="submit"
        >
          Войти
        </Button>
      </form>
    </div>
  )
}