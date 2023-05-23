import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgreementModule } from './agreement/agreement.module';
import { AspectModule } from './aspect/aspect.module';
import { AspectEvidenceModule } from './aspect_evidence/aspect_evidence.module';
import { CharacteristicModule } from './characteristic/characteristic.module';
import { CharacteristicEvidenceModule } from './characteristic_evidence/characteristic_evidence.module';
import { CustomerModule } from './customer/customer.module';
import { DepartmentModule } from './department/department.module';
import { EvidenceModule } from './evidence/evidence.module';
import { FactorModule } from './factor/factor.module';
import { FactorEvidenceModule } from './factor_evidence/factor_evidence.module';
import { FacultyModule } from './faculty/faculty.module';
import { PersonModule } from './person/person.module';
import { ProgramModule } from './program/program.module';
import { ResponsabilityModule } from './responsability/responsability.module';
import { SelfAppraisalModule } from './self_appraisal/self_appraisal.module';

@Module({
    imports: [
        ConfigModule.forRoot(),

        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            database: process.env.DB_NAME,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            autoLoadEntities: true,
            synchronize: true
        }),

        AgreementModule,
        AspectModule,
        AspectEvidenceModule,
        CharacteristicModule,
        CharacteristicEvidenceModule,
        CustomerModule,
        DepartmentModule,
        EvidenceModule,
        FactorModule,
        FactorEvidenceModule,
        FacultyModule,
        PersonModule,
        ProgramModule,
        ResponsabilityModule,
        SelfAppraisalModule
    ],
})

export class AppModule {}