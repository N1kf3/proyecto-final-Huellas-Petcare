"""empty message

Revision ID: 896b64f0a508
Revises: 
Create Date: 2023-04-11 05:48:07.246341

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '896b64f0a508'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('last_name', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('phone_number', sa.String(length=120), nullable=False),
    sa.Column('salt', sa.String(length=500), nullable=False),
    sa.Column('hashed_password', sa.String(length=500), nullable=False),
    sa.Column('medic', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('salt')
    )
    op.create_table('pets',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('age', sa.String(length=2), nullable=False),
    sa.Column('gender', sa.String(length=80), nullable=False),
    sa.Column('race', sa.String(length=80), nullable=False),
    sa.Column('species', sa.String(length=80), nullable=False),
    sa.Column('photo', sa.String(length=500), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('requested_service',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('service_name', sa.String(length=80), nullable=False),
    sa.Column('date', sa.Date(), nullable=False),
    sa.Column('owner_name', sa.String(length=80), nullable=False),
    sa.Column('pet_name', sa.String(length=80), nullable=False),
    sa.Column('pet_species', sa.String(length=80), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=True),
    sa.Column('pet_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['user.id'], ),
    sa.ForeignKeyConstraint(['pet_id'], ['pets.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('requested_service')
    op.drop_table('pets')
    op.drop_table('user')
    # ### end Alembic commands ###