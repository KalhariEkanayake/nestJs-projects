import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private readonly countriesRepository:
    Repository<Country>) {
    }

  async create(createCountryDto: CreateCountryDto) {
    const country = this.countriesRepository.create
    (createCountryDto);

    return await this.countriesRepository.save(country) ;
  }

  async findAll() {
    return await this.countriesRepository.find();
  }

  async findOne(id: number) {
    return await this.countriesRepository.findOne({
      where: {id} });
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    const country = await this.findOne(id);
    if(!country) {
      throw new NotFoundException();
    }

    Object.assign(country, updateCountryDto)
    
    return await this.countriesRepository.save(country);
  }

  async remove(id: number) {
    const country = await this.findOne(id);
    if(!country) {
      throw new NotFoundException();
    }

    return await this.countriesRepository.remove(country);
  }
}
