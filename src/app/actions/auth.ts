import { loginSchema } from '../../lib/login';
import * as yup from 'yup';

export async function login(formData: FormData) {
  try {
    const validatedFields = await loginSchema.validate(
      {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
      },
      { abortEarly: false }, // Permite obtener todos los errores en lugar de solo el primero
    );

    return { data: validatedFields, errors: null }; // Si la validación es exitosa
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return {
        errors: error.inner.reduce(
          (acc, err) => {
            if (err.path) {
              acc[err.path] = err.message;
            }
            return acc;
          },
          {} as Record<string, string>,
        ),
      };
    }
  }
}
