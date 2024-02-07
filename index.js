import express from 'express';
import { config } from 'dotenv';
import { Sequelize, Model, DataTypes } from 'sequelize';

config();

const { BD_NAME, DB_USER, DB_PASS, DB_PORT, DB_HOST } = process.env;

