export class SwaggerUtil {

    static addTag(name: string) {
        return `/** #swagger.tags = ['${name}'] */`;
    }

}